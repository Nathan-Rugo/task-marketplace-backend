FROM php:8.3-apache

# Suppress ServerName warning
RUN echo "ServerName localhost" >> /etc/apache2/apache2.conf

# Use callback.php as default index
RUN echo "DirectoryIndex callback.php" > /etc/apache2/conf-available/directoryindex.conf && \
    a2enconf directoryindex

# Copy script and create log file
COPY callback.php /var/www/html/callback.php
RUN touch /var/www/html/log.txt && chown www-data:www-data /var/www/html/log.txt

EXPOSE 80
