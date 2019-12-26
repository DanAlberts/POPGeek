class Api::V1::PostsController < ApiController

  def index

  end

  def show

  end

  def create
    topic = Topic.find(params[:topic_id])
    topic.category_id = params[:category_id]

    post = Post.new(content: post_params, topic_id: topic.id)
    post.user_id = current_user.id

    if post.save
      render json: post
    else
      render json: {status: "error"}
    end
  end

  def post_params
    params.permit(:post)
  end
end