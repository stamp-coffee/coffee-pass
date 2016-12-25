require 'scraper'

namespace :scrape do
  desc 'scrape tabelog'
  task exec: :environment do |t, args|

    data = {}

    Scraper.run do
      describe '検索結果から20件取得' do
        visit 'https://tabelog.com'
        fill_in 'sa', with: '渋谷駅'
        fill_in 'sk', with: 'カフェ'
        execute_script('$("#sa").autocomplete("search");')

        sleep # wait for autocomplete

        find('#js-global-search-btn').click
        puts title

        list = find_all('#column-main a.cpy-rst-name')
        puts list
        data[:articles] = list
      end

      describe '各ページのデータを取得する' do
        data[:articles].each do |a|
          visit a['href']
          find_all('table.rst-data').each do |table|
            table.find_all('tr').each do |tr|
              p [tr.find('th').text().strip, tr.find('td').text().strip]
            end
          end
          # for debugging
          exit

          sleep
        end
      end
    end
  end
end
