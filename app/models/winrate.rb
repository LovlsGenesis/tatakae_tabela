class Winrate < ApplicationRecord
  belongs_to :member

  def total
    wins + draws + loses
  end
end
