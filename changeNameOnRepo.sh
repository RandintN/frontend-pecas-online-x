#!/usr/bin/env bash

git filter-repo --commit-callback --force'
if commit.author_email == b"brainon.queiroz@golivetech.com.br":
    commit.author_name = b"Brainon Queiroz"
    commit.author_email = b"novo-email@example.com"
    commit.committer_name = b"Brainon Queiroz"
    commit.committer_email = b"novo-email@example.com"
'

