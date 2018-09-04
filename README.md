#Deepspeech Express node server

For testing pourposes only

#Using the server
================

Inference on the model is done via http post requests. For example with the
following curl command:

.. code-block:: console

    curl --header "Content-Type: application/json" \
        --request POST \
        --data '{"url":"http://accessible-url-audiofile"}' http://localhost:8080/speech2txt/url