<#import "template.ftl" as layout>
<@layout.registrationLayout bodyClass="oauth"; section>
    <#if section = "title">
        ${msg("oauthGrantTitle")}
    <#elseif section = "header">
    ${msg("oauthGrantTitleHtml",(realm.displayNameHtml!''))?no_esc} <strong><#if client.name??>${advancedMsg(client.name)}<#else>${client.clientId}</#if></strong>.
    <#elseif section = "form">
        <div id="kc-oauth" class="content-area">
            <h3>${msg("oauthGrantRequest")}</h3>
            <ul>
                <#if oauth.clientScopesRequested??>
                    <#list oauth.clientScopesRequested as clientScope>
                        <li>
                            <span><#if clientScope.consentScreenText??>${advancedMsg(clientScope.consentScreenText)}<#else>${advancedMsg(clientScope.name)}</#if></span>
                        </li>
                    </#list>
                </#if>
            </ul>

            <form class="form-actions" action="${url.oauthAction}" method="POST">
                <input type="hidden" name="code" value="${oauth.code}">
                <div class="${properties.kcFormGroupClass!}">
                    <div id="kc-form-options" class="${properties.kcFormOptionsClass!}">
                        <div class="${properties.kcFormOptionsWrapperClass!}">
                        </div>
                    </div>

                    <div id="kc-form-buttons" class="${properties.kcFormButtonsClass!}">
                        <div class="${properties.kcFormButtonsWrapperClass!}">
                            <input class="${properties.kcButtonClass!} ${properties.kcButtonPrimaryClass!} ${properties.kcButtonLargeClass!}" name="accept" id="kc-login" type="submit" value="${msg("doYes")}"/>
                            <input class="${properties.kcButtonClass!} ${properties.kcButtonDefaultClass!} ${properties.kcButtonLargeClass!}" name="cancel" id="kc-cancel" type="submit" value="${msg("doNo")}"/>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </#if>
</@layout.registrationLayout>