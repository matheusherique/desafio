FROM python:3.8.2

# Allow log messages

ENV PYTHONUNBUFFERED=TRUE

RUN mkdir /rest

WORKDIR /rest

ADD requirements.txt /rest

ADD .secret_key.sh /rest/.secret_key.sh

RUN pip3 install -r requirements.txt

# Give permission and execute shell

RUN chmod +x .secret_key.sh

RUN ./.secret_key.sh