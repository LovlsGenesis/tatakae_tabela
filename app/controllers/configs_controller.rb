class ConfigsController < ApplicationController
  before_action :set_config, only: %i[update edit]

  def new
    @config = Config.new
  end

  def create
    @config = Config.create(config_params)

    return redirect_to members_path if @config.persisted?

    render :new
  end

  def update
    redirect_to members_path if @config.update(config_params)


  end

  private

  def config_params
    params.require(:config).permit(:season_start)
  end

  def set_config
    @config = Config.first
  end
end
