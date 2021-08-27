module Api
  module V1
    class IdeasController < ApplicationController
      def index
        ideas = Idea.all

        render json: {
          ideas: ideas
        }, status: :ok
      end
    end
  end
end
