# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)inheire  child class Blogpostscontroller from parent component ApplicationController 
class BlogPostsController < ApplicationController
  def index
    # ---2)here we will access  all information about BlogPost from database save all the content from the database as an instance variable.
    @posts = BlogPost.all
  end

  def show
    # ---3)Here we will get one item of particular data using id of item BlogPost in the database.This id will come from params
    @post = BlogPost.find(params[:id])
  end

  # ---4)It is a form we are able to add information to our web application that is then stored in the database.
  def new
    @post = Post.new
  end

  def create
    # ---5)it creating or adding new items or content to the database
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  # ---6)It is a form we are able to update information to our web application. find the item and store in the database.
  def edit
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)active record update to update only specific colomns using params
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8)after delete stay on that blog_posts show page 
      redirect_to blog_post_path(@post)
    end
  end

  # ---9)Anything below the word private cannot be accessed ouside the scope of this calss
  private
  def blog_post_params
    # ---10)strong params method. It allows restriction to access particular columns that is  tiltes and content only from the ouside
    params.require(:blog_post).permit(:title, :content)
  end
end
