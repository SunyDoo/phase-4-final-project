# This file is used by Rack-based servers to start the application.

require_relative "config/environment"

run Rails.application
Rails.application.load_server

alias: {
        react: path.resolve('./node_modules/react')
      }
