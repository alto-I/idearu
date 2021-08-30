# frozen_string_literal: true

module Api
  module V1
    class IdeasController < ApplicationController
      before_action :fake_load
      before_action :set_idea, only: %i[show]

      def index
        @ideas = Idea.all
      end

      def show; end

      private

      def set_idea
        idea = Idea.find(params[:id])

        render json: {
          idea: idea
        }, status: :ok
      end

      def fake_load
        sleep(0.3)
      end
    end
  end
end
