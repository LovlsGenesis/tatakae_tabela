class MembersController < ApplicationController
  before_action :set_member, only: %i[show update edit destroy]

  def clean_ranking
    @members = Member.order_by_win_percent
    @config = Config.first
  end

  def index
    @config = Config.first
    @members = Member.all
  end

  def show; end

  def new
    @member = Member.new(joined: DateTime.now)
    @member.build_winrate
  end

  def create
    @member = Member.create(member_params)
    return redirect_to members_path if @member.persisted?

    render :new
  end

  def update
    @winrate = @member.winrate
    redirect_to member_path(@member) if @member.update(member_params)
  end

  def edit
    @winrate = @member.winrate
  end

  def destroy
    redirect_to member_path if @member.destroy
  end

  private

  def member_params
    params.require(:member).permit(:name, :joined, winrate_attributes: {})
  end

  def set_member
    @member = Member.find(params[:id])
  end
end
