# Set env variables
configuration=`echo "${CONFIGURATION}" | awk '{ print tolower($1) }'`

echo "./envs/.env.${configuration}" > /tmp/envfile

"${SRCROOT}/../node_modules/react-native-config/ios/ReactNativeConfig/BuildXCConfig.rb" "${SRCROOT}/.." "${SRCROOT}/tmp.xcconfig"
