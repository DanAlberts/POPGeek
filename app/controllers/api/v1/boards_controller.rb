class Api::V1::BoardsController < ApiController

  def show
    render json: Board.first
  end
end