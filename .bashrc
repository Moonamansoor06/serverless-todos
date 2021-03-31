show_virtual_env() {
  if [ -n "$VIRTUAL_ENV" ]; then
    echo "($(basename $VIRTUAL_ENV))"
  fi
}

PS1='$(show_virtual_env)'$PS1

# direnv
eval "$(direnv hook bash)"