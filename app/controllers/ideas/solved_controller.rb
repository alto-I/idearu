# frozen_string_literal: true

class Ideas::SolvedController < ApplicationController
  before_action :set_idea, only: %i[update destroy]
  before_action :authenticate_user!, only: %i[update destroy]

  def update
    if @idea.update(solved: true)
      redirect_to idea_path(id: @idea.id), notice: 'サービス案を「解決済」に分類しました。'
    else
      redirect_to idea_path(id: @idea.id), alert: 'サービス案を「解決済」に分類することに失敗しました。'
    end
  end

  def destroy
    if @idea.update(solved: false)
      redirect_to idea_path(id: @idea.id), notice: 'サービス案を「未解決」に分類しました。'
    else
      redirect_to idea_path(id: @idea.id), alert: 'サービス案を「未解決」に分類することに失敗しました。。'
    end
  end

  private

  def set_idea
    @idea = Idea.find(params[:id])
  end
end
