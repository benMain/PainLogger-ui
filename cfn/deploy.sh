#!/bin/sh
set -e

#Build up the parameters and Tags
params=`cat ${1}-parameters-${2}.json \
  | jq '.[] | (.ParameterKey + "=" +.ParameterValue)' \
  | sed -e 's/"//g' \
  | sed -e $'s/\r//g' | tr '\n' ' '`


tags=`cat ${1}-tags-common.json \
  | sed -e 's/ *//g' \
  | tr '()' '-' \
  | jq '.[] | (.Key + "=" +.Value)' \
  | sed -e 's/"//g' \
  | sed -e 's/[ \t]//g' \
  | sed -e $'s/\r//g' | tr '\n' ' '`


# Update the Cloudformation Stack.
aws cloudformation deploy --region us-east-1 \
    --no-fail-on-empty-changeset \
    --template-file ${1}-cfn.yaml \
    --stack-name ${1}-${2} \
    --capabilities CAPABILITY_NAMED_IAM \
    --parameter-overrides $params \
    --tags $tags
