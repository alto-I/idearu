# frozen_string_literal: true

class IdeasController < ApplicationController
  before_action :set_idea, only: %i[show edit update destroy solved not_solved]
  before_action :authenticate_user!,
                only: %i[new edit update destroy solved not_solved]

  def index
    @ideas = Idea.all
  end

  def show
    @comments = @idea.comments
    @comment = current_user.comments.new if user_signed_in?
  end

  def new; end

  def edit; end

  def update
    if @idea.update(idea_params)
      redirect_to @idea, notice: 'サービス案を更新しました。'
    else
      render :edit
    end
  end

  def destroy
    @idea.destroy
    redirect_to root_path, notice: '投稿されたサービス案を削除しました。'
  end

  def solved
    @idea.solved = true
    @idea.save
    redirect_to idea_path(id: @idea.id)
  end

  def not_solved
    @idea.solved = false
    @idea.save!
    redirect_to idea_path(id: @idea.id)
  end

  private

  def set_idea
    @idea = Idea.find(params[:id])
  end

  def create_elevorpitch(
    service,
    problem,
    target,
    category,
    appeal_point,
    competitive_services,
    differentiation_factor
  )
    "#{service}というサービスは、#{problem}という問題を解決したい#{target}向けの、#{category}です。ユーザーは#{appeal_point}ができ、#{competitive_services}とは違って、#{differentiation_factor}事が特徴です。"
  end

  def idea_params
    params.require(:idea).permit(:title, :elevatorpitch)
  end
end
