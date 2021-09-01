# frozen_string_literal: true

class IdeasController < ApplicationController
  before_action :set_idea, only: %i[show]
  def index
    @ideas = Idea.all
  end

  def new
    @idea = Idea.new
  end

  def confirm
    @idea = Idea.new(idea_params)
  end

  def show; end

  private

  def set_idea
    @idea = Idea.find(params[:id])
  end

  def idea_params
    params.permit(:title, :elevatorpitch)
  end
end
