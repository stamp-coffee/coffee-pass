require 'capybara/poltergeist'

class Scraper
  attr_accessor :store, :session

  DEFAULT_USERAGENT = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.95 Safari/537.36'

  def initialize
    @driver = Capybara.register_driver :poltergeist do |app|
      Capybara::Poltergeist::Driver.new(app, js_errors: false, timeout: 1000)
    end
    @session = Capybara::Session.new(:poltergeist)
    @session.driver.headers = { 'User-Agent' => DEFAULT_USERAGENT }
  end

  def method_missing(method, *args)
    @session.send(method, *args)
  end

  def sleep(range = 3...8)
    Kernel.sleep range.to_a.sample(1).first
  end

  class << self
    def instance
      @instance ||= new
    end

    def run(&block)
      if block_given?
        class_eval &block
      end
    end

    def describe(name = nil, &block)
      if block_given?
        instance.instance_eval &block
      end
    end
  end
end
