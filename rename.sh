git filter-branch --env-filter '
NEW_EMAIL="ravi.gupta23@yahoo.co.in"
if [ "$GIT_AUTHOR_EMAIL" != "$NEW_EMAIL" ]; then
  export GIT_AUTHOR_EMAIL="$NEW_EMAIL"
fi
if [ "$GIT_COMMITTER_EMAIL" != "$NEW_EMAIL" ]; then
  export GIT_COMMITTER_EMAIL="$NEW_EMAIL"
fi
' -- --all