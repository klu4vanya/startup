FROM python:3.12.3 AS build

RUN pip3 install --no-cache-dir --no-warn-script-location \
        Django==5.2.2 \
        Pillow==11.1.0 \
        djangorestframework==3.16.0 \
        djangorestframework_simplejwt==5.5.0 \
        django-mongodb-backend==5.2.0b1 \
        django-filter==25.1 \
        drf-spectacular==0.28.0 \
        drf-spectacular-sidecar==2025.4.1 \
        uwsgi==2.0.30


FROM python:3.12.3 AS runtime_base

ENV SOCK_PATH=/var/run/python/uwsgi.sock \
    WSGI_FILE_PATH=/var/www/backend/main/wsgi.py \
    WSGI_PROCESSES=4

VOLUME [ "/var/run/python" ]

WORKDIR /var/www/backend

COPY --from=build /usr/local/lib/python3.12/site-packages /usr/local/lib/python3.12/site-packages
COPY --from=build /usr/local/bin/uwsgi /usr/local/bin/

CMD ["sh", "-c", "uwsgi --master --die-on-term --protocol uwsgi --wsgi-file $WSGI_FILE_PATH --socket $SOCK_PATH --chmod-socket=666 --processes=$WSGI_PROCESSES"]

FROM runtime_base AS runtime_dev

EXPOSE 5000
EXPOSE 5678

RUN pip3 install --no-cache-dir --no-warn-script-location debugpy

CMD ["python3", "-m", "debugpy", "--listen", "0.0.0.0:5678", "manage.py", "runserver", "0.0.0.0:5000"]
