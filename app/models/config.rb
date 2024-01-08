class Config < ApplicationRecord
  validates :season_start, presence: true

  after_update :reset_season

  def reset_season
    Member.all.each do |member|
      member.winrate.update(wins: 0, draws: 0, loses: 0)
      member.update(joined: season_start)
    end
  end

  def season_days
    date = DateTime.new(2024,1, 25)
    now = DateTime.now
    value = (date - season_start)
    # value = (now -  season_start)

    return value.to_f if value.to_i.positive?

    0
  end

  def atk_since_season_started
    (season_days / 7).ceil * 9
  end
end
