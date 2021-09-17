# frozen_string_literal: true

module Api
  module V1
    class IdeasController < ApplicationController
      before_action :set_idea, only: %i[show]
      before_action :authenticate_user!, only: %i[create]

      def index
        @ideas =
          if params[:solved] == 'false'
            Idea.all.where(solved: false).order(created_at: 'DESC')
          else
            Idea.all.where(solved: true).order(created_at: 'DESC')
          end
      end

      def show; end

      def create
        # title = params[:problem]
        # elevatorpitch =
        #   create_elevorpitch(
        #     params[:service],
        #     params[:problem],
        #     params[:target],
        #     params[:category],
        #     params[:appeal_point],
        #     params[:competitive_services],
        #     params[:differentiation_factor],
        #   )
        title = params[:title]
        elevatorpitch = params[:elevatorpitch]
        @idea = current_user.ideas.new(title: title, elevatorpitch: elevatorpitch)
        @idea.save!
        # redirect_to idea_path(id: @idea.id)
        render json: { idea: @idea }
      end

      private

      def set_idea
        @idea = Idea.find(params[:id])
      end
    end
  end
end
