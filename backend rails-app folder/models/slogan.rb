class Slogan < ApplicationRecord

  EMAIL_REGEX = /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i

  validates :f_name, presence: { message: "First name can't be blank" }
  validates :l_name, presence: { message: "Last name can't be blank" }
  validates :email, uniqueness: {:case_sensitive => false, :message => "Email address already exist"}
  validates_format_of :email, :message => "Email is invalid" , with: EMAIL_REGEX
  validates :message, length: { minimum: 3, maximum: 50,
    :message => "Slogan need to be entered (less than 50 characters)" }

  before_save :downcase_fields
   def downcase_fields
      self.f_name.downcase!
      self.l_name.downcase!
      self.email.downcase!
      self.message.downcase!
   end
end
