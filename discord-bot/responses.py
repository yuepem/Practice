import random


def handle_response(message: str) -> str:
    p_message = message.lower()

    if p_message == "hello":
        return "hello!"
    