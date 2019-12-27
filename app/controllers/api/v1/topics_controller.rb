class Api::V1::TopicsController < ApiController

  def show
    topic = Topic.find(params[:id])
    posts = topic.posts
    render json: topic, serializer: Api::V1::TopicSerializer, scope: current_user
    
  end

  def create
    
    topic = Topic.new(topic_params)
    topic.category_id = params[:category_id]
    post = Post.new(post_params)
    post.user_id = current_user.id
    if topic.save
      post.topic = topic
      post.save
      render json: {}
    else
      render json: {status: "error"}
    end

  end

  private

  def topic_params
    params.require(:topic).permit(:title)
  end

  def post_params
    params.require(:post).permit(:content)
  end
end