docker run -itd --name es \
-p 9200:9200 -p 9300:9300 \
-v /opt/elasticsearch-7.9.1/config/custom_elasticsearch.yml:/usr/share/elasticsearch/config/elasticsearch.yml \
-v /opt/elasticsearch-7.9.1/data:/usr/share/elasticsearch/data \
-e "discovery.type=single-node" \
-d elasticsearch:7.9.1