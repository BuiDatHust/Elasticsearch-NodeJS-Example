
var indexer = require('./indexer.js');

var config = require ('config');

var indexname = config.elasticsearch.elasticsearchIndices.PRODUCT.index;
var indextype = config.elasticsearch.elasticsearchIndices.PRODUCT.type;
var tableName = config.elasticsearch.elasticsearchIndices.PRODUCT.collectionName;

indexer.IndexMongodbData(indexname,indextype,tableName); //Inserting bulk data into Elasticsearch, Kibana from mongodb