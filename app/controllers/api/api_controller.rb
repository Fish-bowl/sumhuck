class Api::ApiController < ApplicationController
  before_action :authenticate_user!

  private
    def handle_error(model)
      render json: { errors: model.errors}, status: 422
    end
end
end
