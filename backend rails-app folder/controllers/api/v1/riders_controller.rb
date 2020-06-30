module Api::V1
  class RidersController < ApiController

    # GET /v1/riders
    def index
      render json: Rider.all
    end

  end
end
