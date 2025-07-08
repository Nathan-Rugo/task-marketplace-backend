FROM php:8.3-apache

# Set ServerName to suppress warnings
RUN echo "ServerName localhost" >> /etc/apache2/apache2.conf

# Make index.php the default file
RUN echo "DirectoryIndex index.php" > /etc/apache2/conf-available/directoryindex.conf && \
    a2enconf directoryindex

# Copy your renamed script and set up logging
COPY index.php /var/www/html/index.php
RUN touch /var/www/html/log.txt && \
    chown www-data:www-data /var/www/html/log.txt

EXPOSE 80
