from selenium import webdriver

driver = webdriver.Chrome()     #from Chrome   
driver.get('https://www.youtube.com')

searchbox = driver.find_element_by_xpath('//*[@id="search"]')
searchbox.send_keys('Netflix India')

searchButton = driver.find_element_by_xpath('//*[@id="search-icon-legacy"]')
searchButton.click()
