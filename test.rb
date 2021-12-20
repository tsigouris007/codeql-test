class TestController < ApplicationController
  def index
    name_param = params[:name]

    @users = User.where("name like %'||#{name_param}||'%")
  end
end
