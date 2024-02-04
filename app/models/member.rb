class Member < ApplicationRecord
  validates :name, :joined, presence: true
  after_create :winrate_build

  has_one :winrate, dependent: :destroy

  accepts_nested_attributes_for :winrate

  CONFIG = Config.where(id: 1).first

  def self.reset
    all.each do |member|
      member.winrate.update(wins: 0, draws: 0, loses: 0)
      member.update(joined: Config.first.season_start)
    end
  end

  def winrate_build
    build_winrate

    true
  end

  def total_without_atk
    total_atk_per_stay_in_guild - winrate.total
  end

  def total_atk_per_stay_in_guild
    return 0 if CONFIG.nil? || CONFIG.atk_since_season_started.zero?

    atk_since_joined = ((joined - CONFIG.season_start).to_i / 7) * 9

    (CONFIG.atk_since_season_started - (atk_since_joined + number_of_atks_since_joined)) - number_of_atk_actual_week
  end

  def number_of_atks_since_joined
    if joined.wday >= 5
      9
    elsif joined.wday >= 3
      6
    elsif joined.wday > 1
      3
    else
      0
    end
  end

  def number_of_atk_actual_week
    today = Time.zone.now
    return 9 unless (today.wday >= 6 && today.hour >= 7) || today.wday.zero?

    0
  end

  def percent_no_attack
    return 0 if total_atk_per_stay_in_guild <= 0

    ((total_atk_per_stay_in_guild - winrate.total) / total_atk_per_stay_in_guild) * 100
  end

  def win_percent
    return 0 if winrate.total.zero?

    (winrate.wins / (winrate.total + total_without_atk)) * 100
  end

  def self.order_by_win_percent
    all.sort_by(&:win_percent).reverse
  end

  def self.order_by_win_draws
    all.sort_by(&:win_draws).reverse
  end

  def lose_percent
    return 0 if winrate.total.zero?

    ((winrate.loses + total_without_atk) / (winrate.total + total_without_atk)) * 100
  end

  def draw_percent
    return 0 if winrate.total.zero?

    (winrate.draws / (winrate.total + total_without_atk)) * 100
  end

  def win_draws
    (draw_percent / 2) + win_percent
  end

  def lose_draws
    draw_percent / 2
  end

  def bg_color(value)
    if value >= 75.0
      'bg-green-400'
    elsif value >= 60.0
      'bg-orange-400'
    else
      'bg-red-400'
    end
  end
end
