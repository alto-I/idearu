# frozen_string_literal: true

class IdeasController < ApplicationController
  before_action :set_idea, only: %i[show]
  before_action :authenticate_user!, only: %i[new confirm create]
  def index
    @ideas = Idea.all
  end

  def show; end

  def new
    @idea = Idea.new
  end

  def confirm
    title = "#{params[:problem]}という問題を解決したい"
    elevatorpitch =
      create_elevorpitch(
        params[:service_name],
        params[:problem],
        params[:target],
        params[:category],
        params[:appeal_point],
        params[:competitive_services],
        params[:differentiation_factor],
      )
    @idea = Idea.new(title: title, elevatorpitch: elevatorpitch)
  end

  def create
    @idea = current_user.ideas.new(idea_params)
    @idea.save
    redirect_to idea_path(id: @idea.id)
  end

  private

  def set_idea
    @idea = Idea.find(params[:id])
  end

  def create_elevorpitch(
    service_name,
    problem,
    target,
    category,
    appeal_point,
    competitive_services,
    differentiation_factor
  )
    "#{service_name}というサービスは、#{problem}という問題を解決したい#{target}向けの、#{category}です。ユーザーは#{appeal_point}ができ、#{competitive_services}とは違って、#{differentiation_factor}事が特徴です。"
  end

  def idea_params
    params.require(:idea).permit(:title, :elevatorpitch)
  end
end
