import React, { useState } from 'react';
import { Copy, Check, ExternalLink, Code } from 'lucide-react';

function IntegrationGuide() {
  const [copiedCode, setCopiedCode] = useState('');

  const copyToClipboard = (text, codeType) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(codeType);
    setTimeout(() => setCopiedCode(''), 2000);
  };

  const embedCode = `<iframe 
  src="https://ihre-domain.vercel.app" 
  width="100%" 
  height="400" 
  frameborder="0" 
  allowfullscreen>
</iframe>`;

  const customCode = `<div class="coin-container">
  <iframe 
    src="https://ihre-domain.vercel.app" 
    width="100%" 
    height="400" 
    frameborder="0" 
    allowfullscreen
    style="border-radius: 12px; box-shadow: 0 10px 25px rgba(0,0,0,0.1);">
  </iframe>
</div>`;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Webflow Integration Anleitung
        </h2>
        <p className="text-lg text-gray-600">
          So integrieren Sie Ihre Löwen-Coin Präsentation in Webflow
        </p>
      </div>

      <div className="space-y-8">
        {/* Step 1 */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-3">
              1
            </div>
            <h3 className="text-xl font-semibold text-gray-900">
              Projekt deployen
            </h3>
          </div>
          <div className="ml-11">
            <p className="text-gray-700 mb-4">
              Zuerst müssen Sie dieses Projekt online stellen. Verwenden Sie Vercel für kostenloses Hosting:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-gray-600">
              <li>Erstellen Sie ein kostenloses Konto bei <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Vercel.com</a></li>
              <li>Laden Sie den Projektordner hoch oder verbinden Sie Ihr GitHub Repository</li>
              <li>Vercel erkennt automatisch das Vite-Projekt und deployt es</li>
              <li>Sie erhalten eine URL wie: <code className="bg-gray-100 px-2 py-1 rounded">https://ihr-projekt.vercel.app</code></li>
            </ol>
          </div>
        </div>

        {/* Step 2 */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mr-3">
              2
            </div>
            <h3 className="text-xl font-semibold text-gray-900">
              Webflow Integration
            </h3>
          </div>
          <div className="ml-11">
            <p className="text-gray-700 mb-4">
              In Webflow können Sie die Coin-Präsentation auf verschiedene Weise einbetten:
            </p>
            
            {/* Basic Embed */}
            <div className="mb-6">
              <h4 className="font-semibold text-gray-800 mb-2">Option A: Einfacher Embed</h4>
              <div className="bg-gray-900 rounded-lg p-4 relative">
                <button
                  onClick={() => copyToClipboard(embedCode, 'basic')}
                  className="absolute top-2 right-2 p-2 text-gray-400 hover:text-white transition-colors"
                  title="Code kopieren"
                >
                  {copiedCode === 'basic' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </button>
                <pre className="text-green-400 text-sm overflow-x-auto">
                  <code>{embedCode}</code>
                </pre>
              </div>
            </div>

            {/* Custom Embed */}
            <div className="mb-6">
              <h4 className="font-semibold text-gray-800 mb-2">Option B: Styled Embed</h4>
              <div className="bg-gray-900 rounded-lg p-4 relative">
                <button
                  onClick={() => copyToClipboard(customCode, 'custom')}
                  className="absolute top-2 right-2 p-2 text-gray-400 hover:text-white transition-colors"
                  title="Code kopieren"
                >
                  {copiedCode === 'custom' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </button>
                <pre className="text-green-400 text-sm overflow-x-auto">
                  <code>{customCode}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-3">
              3
            </div>
            <h3 className="text-xl font-semibold text-gray-900">
              Webflow Schritte
            </h3>
          </div>
          <div className="ml-11">
            <ol className="list-decimal list-inside space-y-3 text-gray-700">
              <li>Öffnen Sie Ihr Webflow Projekt im Designer</li>
              <li>Navigieren Sie zu der Seite, wo die Coin-Präsentation erscheinen soll</li>
              <li>Ziehen Sie ein <strong>"Embed"</strong> Element aus der Komponenten-Liste an die gewünschte Position</li>
              <li>Doppelklicken Sie auf das Embed Element</li>
              <li>Fügen Sie den kopierten Code ein (ersetzen Sie "ihre-domain" mit Ihrer echten Vercel URL)</li>
              <li>Klicken Sie "Save & Close"</li>
              <li>Publizieren Sie Ihre Webflow Seite</li>
            </ol>
          </div>
        </div>

        {/* Tips */}
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 bg-yellow-600 text-white rounded-full flex items-center justify-center font-bold mr-3">
              💡
            </div>
            <h3 className="text-xl font-semibold text-gray-900">
              Tipps & Anpassungen
            </h3>
          </div>
          <div className="ml-11">
            <ul className="space-y-2 text-gray-700">
              <li><strong>Höhe anpassen:</strong> Ändern Sie <code className="bg-gray-100 px-1 rounded">height="400"</code> auf Ihre gewünschte Höhe</li>
              <li><strong>Responsive Design:</strong> Das iframe passt sich automatisch an die Containerbreite an</li>
              <li><strong>Vollbild-Modus:</strong> Benutzer können auf das Vollbild-Icon klicken für eine größere Ansicht</li>
              <li><strong>Interaktivität:</strong> Die Coin kann pausiert, manuell gedreht und vergrößert werden</li>
              <li><strong>Performance:</strong> Das iframe lädt nur wenn es sichtbar ist (lazy loading)</li>
            </ul>
          </div>
        </div>

        {/* Preview */}
        <div className="text-center">
          <a
            href="https://vercel.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            Jetzt bei Vercel deployen
          </a>
        </div>
      </div>
    </div>
  );
}

export default IntegrationGuide;
