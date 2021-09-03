# frozen_string_literal: true

module Api
  module V1
    class LikesController < ApplicationController
      before_action :set_idea, only: %i[index create]

      def index
        like = Like.where(
          user: current_user,
          idea: @idea
        )

        render json: {
          like: like
        }, status: :ok
      end

      def create
        like = Like.create!(
          user: current_user,
          idea: @idea
        )

        render status: :create, json: like
      end

      def destroy
        Like.find(params[:id]).destroy
        head :no_content
      end


      private

      def set_idea
        @idea = Idea.find(params[:idea])
      end
    end
  end
end
