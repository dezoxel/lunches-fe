# config valid only for current version of Capistrano
lock '3.4.0'

set :application, 'cogniance.lunches.com.ua'
set :repo_url, 'git@github.com:dezoxel/lunches-fe.git'

# Default branch is :master
# ask :branch, `git rev-parse --abbrev-ref HEAD`.chomp

# Default deploy_to directory is /var/www/my_app_name
# set :deploy_to, '/var/www/my_app_name'

# Default value for :scm is :git
# set :scm, :git

# Default value for :format is :pretty
# set :format, :pretty

# Default value for :log_level is :debug
# set :log_level, :debug

# Default value for :pty is false
# set :pty, true

# Default value for :linked_files is []
# set :linked_files, fetch(:linked_files, []).push('config/database.yml', 'config/secrets.yml')

# Default value for linked_dirs is []
# set :linked_dirs, fetch(:linked_dirs, []).push('log', 'tmp/pids', 'tmp/cache', 'tmp/sockets', 'vendor/bundle', 'public/system')
set :linked_dirs, %w{dist/assets}

# Default value for default_env is {}
# set :default_env, { path: "/opt/ruby/bin:$PATH" }

set :default_env, {
  path: [
    "/home/$USER/.nvm/versions/node/v5.3.0/bin",
    "$PATH"
  ].join(":")
}

# Default value for keep_releases is 5
# set :keep_releases, 5

namespace :deploy do

  task :bower_and_npm_install do
    on roles(:web), in: :sequence, wait: 5 do
      within release_path do
        execute :npm, "install"
        execute :bower, "install"
      end
    end
  end

  task :build do
    on roles(:web), in: :sequence, wait: 5 do
      within release_path do
        execute :gulp, "build"
      end
    end
  end

  after :updated, :bower_and_npm_install
  after :bower_and_npm_install, :build
end
