# 🗣️ TextMod

## ..is a Discord bot that modifies text

### (not to be confused with moderating text)

---

_Q & A_

## Wtf is this bot/??

It modifies text. Here, let me show you an example

```sh
/reverse Hello
  TextMod: olleH

/expand Hello there
  TextMod: H e l l o  t h e r e

# I despise this one.
/uwu Hello
  TextMod: h- hewwo...
```

## How 2 invite???

I can't host shit yet.

## Well, if I can't invite, how do I run??

Place your token in `.env` in this format:

```env
TOKEN=yourtokenhere
```

...and modify `config.json`:

```json
{
  "clientID": "Application ID here",
  "slashCommandsGuildID": "The guild in which slash commands will be registered"
}
```

Deploy commands: `npm run deploy-commands`
Run: `npm start`

and that's it!

## Who made this?

me lol

## Who am I?

I don't know

## Am I real?

Probably

## Please tell me

No
