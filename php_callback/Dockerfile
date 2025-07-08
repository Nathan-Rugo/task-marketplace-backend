FROM php:8.3-apache-bullseye

# Install dependencies and the helper script
RUN apt-get update \
    && apt-get upgrade -y \
    && apt-get install -y unzip git libzip-dev libcurl4-openssl-dev \
    && rm -rf /var/lib/apt/lists/* \
    && curl -sSLf https://github.com/mlocati/docker-php-extension-installer/releases/latest/download/install-php-extensions \
        -o /usr/local/bin/install-php-extensions \
    && chmod +x /usr/local/bin/install-php-extensions

# Install required PHP extensions using helper
RUN install-php-extensions curl

# Copy your callback script
COPY callback.php /var/www/html/callback.php
RUN chown www-data:www-data /var/www/html/callback.php
