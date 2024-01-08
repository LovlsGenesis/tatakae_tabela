class WinratesController < ApplicationController
  def index
    @winrates = Winrate.all
  end
end
