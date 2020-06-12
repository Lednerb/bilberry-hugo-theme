import argparse
import json
from algoliasearch.search_client import SearchClient

parser = argparse.ArgumentParser()
parser.add_argument('-f', '--index-file', help="Index file to upload to Algolia")
parser.add_argument('-a', '--app-id', help="Algolia application ID")
parser.add_argument('-k', '--admin-api-key', help="Algolia admin API key")
parser.add_argument('-n', '--index-name', help="Algolia index name")
args = parser.parse_args()

with open(args.index_file, 'r') as file:
    indices_json = file.read().replace('\n', '')

indices = json.loads(indices_json)
client = SearchClient.create(args.app_id, args.admin_api_key)
index = client.init_index(args.index_name)
index.save_objects(indices)
