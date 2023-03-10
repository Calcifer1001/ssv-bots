module.exports = {
  apps : [{
    name: 'ssv-heartbeat',
    cwd: 'dist',
    script: 'bots/heartbeat/index.js',
    restart_delay: 1000,
    watch: 'bots/heartbeat/index.js',
    out_file: 'main.log',
    error_file: 'main.log',
    log_date_format: 'YYYY-MM-DD HH:mm:ss:SSS',
  }]
};

