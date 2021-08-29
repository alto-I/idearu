# frozen_string_literal: true

module Api
  module V1
    class IdeasController < ApplicationController
      before_action :fake_load

      def index
        ideas = Idea.all

        render json: { ideas: ideas }, status: :ok
      end

      private

      def fake_load
        sleep(1)
      end
    end
  end
end
