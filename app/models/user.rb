require 'valid_email'
class User < ActiveRecord::Base
	self.has_secure_password
	include ActiveModel::Validations
  	attr_accessor :email
	validates :email, :presence => true, :email => true
end
