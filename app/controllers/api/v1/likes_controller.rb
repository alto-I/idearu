# frozen_string_literal: true

module Api
  module V1
    class LikesController < ApplicationController
      before_action :set_idea, only: %i[show]

      def show
        like = Like.where(
          user: current_user,
          idea: @idea
        )

        render json: {
          like: like
        }, status: :ok
      end

      def create
        like = current_user.likes.create!(idea_params)
        render json: like
      end

      def destroy
        Like.find(params[:id]).destroy
        head :no_content
      end

      private

      def set_idea
        @idea = Idea.find(params[:id])
      end

      def idea_params
        params.require(:like).permit(:idea_id)
      end
    end
  end
end
