# frozen_string_literal: true

module Api
  module V1
    class IdeasController < ApplicationController
      before_action :authenticate_user!, only: %i[create]

      def index
        @ideas =
          if params[:solved] == 'false'
            Idea.all.where(solved: false).order(created_at: 'DESC')
          else
            Idea.all.where(solved: true).order(created_at: 'DESC')
          end
      end

      def create
        title = params[:title]
        elevatorpitch = params[:elevatorpitch]
        @idea = current_user.ideas.new(title: title, elevatorpitch: elevatorpitch)
        @idea.save!
        render json: { idea: @idea }
      end
    end
  end
end
