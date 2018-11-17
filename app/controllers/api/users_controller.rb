class Api::UsersController < ApplicationController

  def update
    user = User.find(params[:id])
    user.name = params[:name]
    user.email = params[:email]
    profile_name = 'symbolt.ap'
    s3 = Aws::S3::Client.new(profile: profile_name, region: ENV['AWS_REGION'])
    s3_bucket = ENV['BUCKET']
    file = params[:file]
    begin
      if !file.blank?
        ext = File.extname(file.tempfile)
        obj = s3.bucket(s3_bucket).object("avatars/#{user.id}#{ext}")
        obj.upload_file(file.tempfile, acl: 'public-read')
        user.image = obj.public_url
      end
      if user.save
        render json: user
      else
        handle_error(user)
      end
      rescue => e
        render json: { errors: e }, status: 422
    end
  end
end
