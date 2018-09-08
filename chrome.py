import webbrowser
import sys

lang = sys.argv

lang.remove('chrome.py')

chrome_path = 'open -a /Applications/Google\ Chrome.app %s'

url = 'https://bing.com/search?q='

words = [
  'test',
  'testing',
  'what is your name',
  'dragon fruit',
  'things to say',
  'find a house',
  'where to live',
  'places to see',
  'what is your name',
  'dogs',
  'tigers and bears',
  'moose and dog',
  'not today',
  'the turtle swims',
  'where is the ocean',
  'i want to watch the league',
  'where should I eat',
  'where is a fun place to go',
  'where can I go shop',
  'find a place to eat',
  'things to go watch',
  'someone just help me here',
  'just a few extra',
  'places to dance',
  'where have all the cowboys gone',
  'shows to watch',
  'where to buy video games',
  'she probably wont',
  'fantasy football',
  'get out of here taco',
  'thats a bad dog',
  'she is so brilliant',
  'big lunch'
]

new_word = ''

for word in words:
  new_word = 'How do you say ' + word + ' in ' + lang[0]
  new_url = url + new_word
  webbrowser.get(chrome_path).open(new_url)
