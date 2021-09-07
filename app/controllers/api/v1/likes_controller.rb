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
          like: like,
          totalLike: @idea.likes.length
        }, status: :ok
      end

      def create
        like = current_user.likes.create!(idea_params)
        idea = Idea.find(params[:like][:idea_id])
        render json: {
          like: like,
          totalLike: idea.likes.length
        }
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
