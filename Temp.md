### Amazon Aurora
- proprietary technology from AWS (Not Open source)
- It support PostgresSQL and MySQL
- 5X performance over MySQL and 3X performance over PostgresSQL
- 15 replicas with 0.1 second latency
- Storage auto scales up to 128TB

### Amazon Elastic Cache:
- Relational database same as RDS
- Get managed Redis or Memcache
- Cache are in-memory database with high performance and low latency

### DynamoDB
- Fully managed and highly available
- NoSQL database
- Key-value and document database
- Single-digit millisecond latency
- Auto scaling and on-demand capacity modes
- Global tables for multi-region replication
- DynamoDB Accelerator: (DAX)
- In memory cache for DynamoDb - 10X performance - Only integrated with DynamoDB

### Redshift
- Based on the PostgreSQL
- Data warehouse
- Columnar storage and parallel processing
- Fast query performance for large datasets
- Integrates with AWS ecosystem (S3, EMR, etc.)
- not used for OLTP (Online Transaction Processing)
- It's OLAP (Online Analysis Processing)

### Amazon EMR (Hadoop Cluster)
- Elastic Map Reduce (EMR)
- Managed Hadoop framework
- Process and analyze large datasets using Hadoop, Spark, etc.
- Scalable and cost-effective
- Used for data processing, machine learning, web indexing, big data

### Amazon Athena: Analyze data in S3 using serverless SQL
- Serverless query service to perform analytics against S3 objects
- Use standard SQL language to query the files
- Supports CSV, JSON, Avro and Parquet
- Price are 5$ per TB data scan

### Amazon QuickSight:
- Business intelligence service
- Create and publish interactive dashboards
- Connect to various data sources (RDS, Redshift, S3, etc.)
- Machine learning insights and natural language querying

### Document DB
- Fully managed document database service
- Compatible with MongoDB
- Scalable and highly available
- Automatic backups and point-in-time recovery

### Amazon Neptune
- Fully managed graph database service
- Supports both property graph and RDF graph models
- High performance and low latency

### Amazon Timestream
- Fully managed time series database service
- Designed for IoT and operational applications
- Fast ingestion and querying of time series data

### Amazon QLDB
- Fully managed ledger database service
- Immutable and cryptographically verifiable transaction log

### Amazon Blockchain - `Hyper ledger fabric | ethereum | blockchain`
- Make possible to to build application
- Decentralize blockchain 

### Amazon Glue
- Managed extract, transform, and load service
- Used to prepare and transform data for analytics

 gemini --resume "ea138204-23e8-4a78-b431-4963eb5dad10"  