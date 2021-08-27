# frozen_string_literal: true

class IdeasController < ApplicationController
  def index
    @ideas = Idea.all
  end
end
